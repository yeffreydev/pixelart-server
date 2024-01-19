import app from "./app";
import config from "./config/config";

const PORT = config.PORT;

app.listen(PORT, () => console.log(`server listen on http://localhost:${PORT}`));
