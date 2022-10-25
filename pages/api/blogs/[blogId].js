import {
  getBlogById,
  deleteBlogById,
  createBlog,
  updateBlog,
} from "../../../data/blogs";
// const multer = require("multer");

export default async function handler(req, res) {
  const blogId = req.query.blogId;
  const method = req.method;

  // var imgconfig = multer.diskStorage({
  //   destination: (req, file, callback) => {
  //     callback(null, "./images");
  //   },
  //   filename: (req, file, callback) => {
  //     callback(null, `image-${Date.now()}.${file.originalname}`);
  //   },
  // });

  // // img filter
  // const isImage = (req, file, callback) => {
  //   if (file.mimetype.startsWith("image")) {
  //     callback(null, true);
  //   } else {
  //     callback(null, Error("only image is allowd"));
  //   }
  // };

  // var upload = multer({
  //   storage: imgconfig,
  //   fileFilter: isImage,
  // });

  let result;
  switch (method) {
    case "GET":
      result = await getBlogById(blogId);
      res.json(result);
      break;

    case "DELETE":
      result = await deleteBlogById(blogId);
      res.json({ ...result, message: `blog with blogId: ${blogId} deleted` });
      break;

    case "POST":
      const title = req.body.title;
      const description = req.body.description;
      const img = req.body.filename;

      result = await createBlog(title, description, img);
      res.json({ ...result, message: `user with userId: ${title} created` });
      break;

    case "PUT":
      const updateTitle = req.body.title;
      const updateDescription = req.body.description;

      result = await updateBlog(blogId, updateTitle, updateDescription);
      res.json({ ...result, message: `blog with title: ${blogId} updated` });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
