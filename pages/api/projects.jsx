// import data from "../../lib/projects.json";
import data from "../../lib/projects2";

export default function handler(req, res) {
  res.status(200).json(data);
}
