import data from "../../../lib/projects.json";

export default function idRequest(req, res) {
  const { slug } = req.query;
  const request = data.find((x) => String(x.slug) === String(slug));

  if (request) {
    res.status(200).json(request);
  } else {
    res.status(404).json({ status: 404, message: "Not Found" });
  }
}
