import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo'

describe('Todo app', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Todo, {
            propsData: {
                title: 'My list'
            }
        });
    });

    async function addTodo(todoText) {
        wrapper.find('[data-testid="todo-input"]').setValue(todoText);
        await wrapper.find('[data-testid="todo-submit"]').trigger('click');
    }

    function elementText(testId) {
        return wrapper.find(`[data-testid="${testId}"]`).text();
    }


    it('adds just one to-do', async() => {
        await addTodo("task 1");
        expect(elementText('todos')).toContain("task 1")
    })

    it('adds more than one to-do', async() => {
        await addTodo("task 1");
        await addTodo("task 2");
        expect(elementText('todos')).toContain("task 1")
        expect(elementText('todos')).toContain("task 2")
    })

    it('deletes the field text when a new task is added', async() => {
        await addTodo('Nuevo todo a ingresar');
        expect(wrapper.find('[data-testid="todo-input"]').element.value).toEqual('')
    })

    it('shows the tasks in order', async() => {
        await addTodo("task 1");
        await addTodo("task 2");
        expect(elementText('todo-0')).toMatch('task 1')
        expect(elementText('todo-1')).toMatch('task 2')
    })

    it('check a task as done', async() => {
        function itemDone(itemId) {
            return wrapper.find(`[data-testid="todo-${itemId}"]`).attributes('data-done') === 'true'
        }

        await addTodo("task 1");

        expect(itemDone(0)).toBe(false)
        await wrapper.find('[data-testid="todo-0-toggle"]').trigger('click')
        expect(itemDone(0)).toBe(true)
    })
});