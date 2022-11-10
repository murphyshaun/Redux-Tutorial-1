import { createServer, Model } from 'miragejs';

export const setupServer = () => {
    const server = createServer({
        models: {
            todos: Model
        },
        routes() {
            this.get("/api/todos", (schema) => {
                return schema.todos.all();
            });

            this.post('/api/todos', (schema, request) => {
                const payload = JSON.parse(request.requestBody);

                return schema.todos.create(payload)
            });

            this.put('/api/todos', (schema, request) => {
                const payload = JSON.parse(request.requestBody);

                const currentTodo = schema.todos.find(payload.id);
                
                currentTodo.update(payload);
            })
        }
    })

}