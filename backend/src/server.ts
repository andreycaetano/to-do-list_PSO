import { app } from "./app";

app.listen(process.env.PORT, () => {
    console.log(`API sucessfully started on port ${process.env.PORT}`);
})