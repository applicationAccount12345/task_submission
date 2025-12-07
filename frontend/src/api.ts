
export interface Task {
    id?: number;
    title: string;
    description?: string;
    status: string;
    dueDate?: string;
}

const API_URL = 'http://localhost:8080/tasks';

export const createTask = async (task: Task): Promise<Task> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });

    if (!response.ok) {
        throw new Error('Failed to create task');
    }

    return response.json();
};
