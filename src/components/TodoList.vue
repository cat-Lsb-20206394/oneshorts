<template>
    <List :items="todos">
      <template #default="{ item}">
        <div
            class="card-body p-2 d-flex align-items-center"
            style="cursor: pointer"
            @click="moveToPage(item.id)"
        >
          <div class="flex-grow-1">
          <span>
            {{ item.subject }}
          </span>
          </div>
          <div>
            <button
                class="btn btn-danger btn-sm"
                @click.stop="openModal(item.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </template>
    </List>

    <teleport to="#modal">
      <Modal
          v-if="showModal"
          @close="closeModal"
          @delete="deleteTodo"
      />
    </teleport>
</template>

<script>
import { useRouter } from 'vue-router';
import Modal from '@/components/DeleteModal.vue';
import { ref, getCurrentInstance} from 'vue';
import List from '@/components/List.vue';

export default {
    components: {
      Modal,
      List
    },
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    emits: ['delete-todo'],
    setup() {
        const { emit } = getCurrentInstance();
        const router = useRouter();
        const showModal = ref(false);
        const todoDeleteId = ref(null);

        const openModal = (id) => {
          todoDeleteId.value = id;
          showModal.value = true;
        };

        const closeModal = () => {
          todoDeleteId.value = null;
          showModal.value = false;
        };
        
        const deleteTodo = () => {
          emit('delete-todo', todoDeleteId.value);
          showModal.value = false;
          todoDeleteId.value = null;
        };

        const moveToPage = (todoId) => {
          router.push({
            name: 'Todo',
            params: {
              id: todoId
            }
          });
        };


        return {
            deleteTodo,
            moveToPage,
            showModal,
            openModal,
            closeModal,
        };
    }
}
</script>

<style>

</style>