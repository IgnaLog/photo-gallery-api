import { Request, Response } from "express";
import Photo from "../models/Photo";
import path from "path";
import fs from "fs-extra";

export async function createPhoto(
  req: Request,
  res: Response
): Promise<Response> {
  const { title, description } = req.body;
  const newPhoto = {
    title: title,
    description: description,
    imagePath: req.file?.path,
  };

  const photo = new Photo(newPhoto);
  await photo.save();

  return res.json({ messsage: "Photo successfully saved", photo });
}

export async function getPhotos(
  req: Request,
  res: Response
): Promise<Response> {
  const photos = await Photo.find();

  return res.json(photos);
}

export async function getPhoto(req: Request, res: Response): Promise<Response> {
  const photo = await Photo.findById(req.params.id);

  return res.json(photo);
}

export async function deletePhoto(
  req: Request,
  res: Response
): Promise<Response> {
  const photo = await Photo.findByIdAndRemove(req.params.id);
  if (photo) {
    // Check if the image path exists
    await fs.unlink(path.resolve(photo.imagePath));
  }

  return res.json({ message: "Photo removed", photo });
}

export async function updatePhoto(
  req: Request,
  res: Response
): Promise<Response> {
  const { title, description } = req.body;
  const { id } = req.params;
  const updatedPhoto = await Photo.findByIdAndUpdate(
    id,
    {
      title,
      description,
    },
    { new: true }
  );

  return res.json({ message: "Updated Successfully", updatedPhoto });
}
