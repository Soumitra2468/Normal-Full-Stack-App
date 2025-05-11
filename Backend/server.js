import app from "./app.js";
import Dbconnect from "./DbConfig/dbConnection.js";
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await Dbconnect();
  console.log(`Server is running on port ${PORT}`);
});
