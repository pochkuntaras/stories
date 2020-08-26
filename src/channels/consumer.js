import { createConsumer } from "@rails/actioncable"

const webSocketURL = `wss://${process.env.DOMAIN}/cable`;

export default createConsumer(webSocketURL);
