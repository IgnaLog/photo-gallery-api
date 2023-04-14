import { connect } from "mongoose";

export async function startConnection() {
  await connect("mongodb://localhost/photogallerydb");
  console.log("Database is connected");
}
