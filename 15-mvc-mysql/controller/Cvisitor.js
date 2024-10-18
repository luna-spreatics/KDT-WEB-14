const Visitor = require("../model/Visitor");

// GET /
const main = (req, res) => {
  res.render("index");
};

// GET /visitors
const get_visitors = async (req, res) => {
  // 모델에서 데이터 받아오기

  // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답
  // 비동기 처리가 필요하다
  const data = await Visitor.getVisitors(); // [{}, {}]
  console.log(data);
  res.render("visitor", { data });
};

// POST /visitor
const post_visitor = async (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body;

  const data = await Visitor.postVisitor(name, comment);
  console.log(data);
  res.send("fd");
};

module.exports = { main, get_visitors, post_visitor };
