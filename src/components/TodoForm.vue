<template>
  <div v-if="loading">
    Loading...
  </div>
  <form 
    v-else
    @submit.prevent="onSave"
  >
    <div class="row">
      <div v-if="editing" class="col-4">
        <div class="form-group">
          <label>Video link(youtube)</label>
        </div>
      </div>
      <div v-else class="col-4">
        <label>Select the Video</label>
        <input
          ref="videoUploader"
          type="file"
          @change="uploadVideoFile($event.target)"
        >
      </div>
      <div class="col-8">
        <Input 
          label="Subject" 
          v-model:subject="todo.subject"
          :error="subjectError"
        />
      </div>
      <div class="col-4">
        <label>Select the platform</label>
        <div class="container">
          <div class="row row-cols-2">
            <div class="col mt-2" >
              <img :src="require(`@/assets/platform/facebook.png`)" style="height: 80px; width: 80px;"/>
              <input class="ml-4" type="checkbox" value="uploadfacebook">
            </div>
            <div class="col mt-2">
              <img :src="require(`@/assets/platform/instagram.png`)" style="height: 80px; width: 80px;"/>
              <input class="ml-4" type="checkbox" value="uploadinstagram">
            </div> 
            <div class="col mt-5">
              <img :src="require(`@/assets/platform/youtube.png`)" style="height: 80px; width: 80px;"/>
              <input class="ml-4" type="checkbox" value="uploadyoutube">
            </div>
            <div class="col mt-5">
              <img :src="require(`@/assets/platform/tik-tok.png`)" style="height: 80px; width: 80px;"/>
              <input class="ml-4" type="checkbox" value="uploadtiktok">
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="form-group">
          <label>Body</label>
          <textarea v-model="todo.body" class="form-control" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
    <button v-if="!editing"
      type="submit" 
      class="btn btn-outline-dark mt-2"
      :disabled="!todoUpdated"
    >
      Upload
    </button>
    <button v-else
      class="btn btn-outline-dark mt-2 ml-2"
      @click="moveToTodoListPage"
    >
      확인
    </button>
  </form>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import axios from '@/axios';
import { ref, computed } from 'vue';
import _ from 'lodash';
import { useToast } from '@/composables/toast';
import Input from '@/components/Input.vue';

export default {
  components: {
    Input
  },
  props: {
      editing: {
          type: Boolean,
          default: false
      }
  },
    setup(props) {
        const route = useRoute();
        const router = useRouter();
        const todo = ref({
            subject: '',
            body: ''
        });

        const subjectError = ref('');
        const originalTodo = ref(null);
        const loading = ref(false);
        const {
          toastMessage,
          toastAlertType,
          showToast,
          triggerToast
        } = useToast();

        const todoId = route.params.id      

        const getTodo = async () => {
            loading.value = true;
          try {
            const res = await axios.get(`todos/${todoId}`);

            todo.value = { ...res.data };
            originalTodo.value = { ...res.data };

            loading.value = false;
          } catch (error) {
            loading.value = false;
            console.log(error);
            triggerToast('Something went wrong', 'danger');
          }
        };

        const todoUpdated = computed(() => {
          return !_.isEqual(todo.value, originalTodo.value)
        });


        const moveToTodoListPage = () => {
          router.push({
            name: 'Todos'
          })
        };

        if (props.editing) {
            getTodo();
        }

        const onSave = async () => {
          subjectError.value = '';
          if (!todo.value.subject) {
            subjectError.value = 'Subject is required';
            return;
          }

          try {
            let res;
            const data = {
              subject: todo.value.subject,
              body: todo.value.body,
            };
            if (props.editing) {
              res = await axios.put(`todos/${todoId}`, data);
              originalTodo.value = {...res.data};
            } else {
              res = await axios.post('todos', data);
              todo.value.subject = '';
              todo.value.body = '';
            }
            
            const message = 'Successfully ' + (props.editing ? 'Updated!' : 'Created!');
            triggerToast(message);

            if (!props.editing) {
              router.push({
                name: 'Todos'
              })
            }
          } catch (error) {
            console.log(error);
            triggerToast('Something went wrong', 'danger')
          }
        };

        return {
          todo,
          loading,
          moveToTodoListPage,
          onSave,
          todoUpdated,
          showToast,
          toastMessage,
          toastAlertType,
          subjectError,
        };
    }
}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
    transform: translateY(0px);
  }
  .file_upload{
    border-width: 1px;
    border-color: black;
  }
</style>