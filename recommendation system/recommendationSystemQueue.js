import Queue from "./queue";

const queue = new Queue();
let isRunning = false;

const run = async () => {
    isRunning = true;
    while (!queue.isEmpty()) {
        const {success, data} = queue.tryDequeue();
        if (success) {
            await calculateRecommendations(data);
        }
    }
    isRunning = false;
}

const add = (data) => {
    queue.enqueue(data);
    if (!isRunning) {
        run().catch(console.error);
    }
}

// todo save queue to file in case of crash or something
