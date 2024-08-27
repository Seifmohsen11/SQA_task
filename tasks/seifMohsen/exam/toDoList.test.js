const tasks = [{
    taskNumber: 1,
    taskName: "Studying python",
}];

function addTask(task) {
    if (typeof task !== 'object' || task === null || Array.isArray(task)) {
        throw new Error("Please enter an object");
    }
    tasks.push(task);
}

function deleteTask(index) {
    if (index <= 0) {
        throw new Error("Please enter a number greater than 0");
    }
    if (index >= 1 && index <= tasks.length) {
        tasks.splice((index - 1), 1);
    }
}

function updateTask(index, newTask) {
    if (index <= 0) {
        throw new Error("Please enter a number greater than 0");
    }
    if (index >= 1 && index <= tasks.length) {
        tasks[index - 1] = newTask;
    }
}

addTask({
    taskNumber: 2,
    taskName: "Studying C++",
});
addTask({
    taskNumber: 3,
    taskName: "Studying java",
});

updateTask(1, {
    taskNumber: 1,
    taskName: "Studying data structure",
});
deleteTask(3);

console.log('Initial tasks:', tasks);

describe('Task Management', () => {
    test('test add tasks', () => {
        addTask({
            taskNumber: 3,
            taskName: "Studying Maths",
        });
        expect(tasks).toEqual(
            expect.arrayContaining([
                { taskNumber: 1, taskName: 'Studying data structure' },
                { taskNumber: 2, taskName: 'Studying C++' },
                { taskNumber: 3, taskName: "Studying Maths" }
            ])
        );
    });

    test('Check the data types of each property', () => {
        expect(tasks).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    taskNumber: expect.any(Number),
                    taskName: expect.any(String),
                })
            ])
        );
    });

    test('Validate the values for task number', () => {
        tasks.forEach(item => {
            expect(item.taskNumber).toBeGreaterThan(0);
        });
    });

    test('test update tasks', () => {
        updateTask(1, {
            taskNumber: 1,
            taskName: "Studying Algebra",
        });
        expect(tasks).toEqual(
            expect.arrayContaining([
                { taskNumber: 1, taskName: 'Studying Algebra' },
                { taskNumber: 2, taskName: 'Studying C++' }
            ])
        );
    });

    test('test delete tasks', () => {
        deleteTask(1);
        expect(tasks).toEqual(
            expect.arrayContaining([
                { taskNumber: 2, taskName: 'Studying C++' }
            ])
        );
    });

    test('check validation', () => {
        expect(() => deleteTask(0)).toThrow("Please enter a number greater than 0");
        expect(() => deleteTask(-2)).toThrow("Please enter a number greater than 0");
        expect(() => updateTask(0)).toThrow("Please enter a number greater than 0");
        expect(() => deleteTask(-2)).toThrow("Please enter a number greater than 0");
        expect(() => addTask(0)).toThrow("Please enter an object");
        expect(() => addTask([])).toThrow("Please enter an object");
    });
});