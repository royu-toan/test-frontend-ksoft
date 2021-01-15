// Import react
import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const ARTICLES = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24"
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23"
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22"
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21"
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21"
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21"
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31"
  }
];

const Sort = (props) => {
  const sorts = [
    {
      variant: "primary",
      text: "Most Upvoted",
      sort: (e) => {
        props.sortUpvoted(e);
      }
    },
    {
      variant: "success",
      text: "Most Recent",
      sort: (e) => {
        props.sortRecent(e);
      }
    }
  ];

  return (
    <div className="mb-3">
      {sorts.map((item) => (
        <React.Fragment key={item.text}>
          <Button variant={item.variant} onClick={item.sort}>
            {item.text}
          </Button>{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

const Article = (props) => {
  const info = props.info;

  return (
    <Card className="w-100 mb-2">
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Upvotes: {info.upvotes}
        </Card.Subtitle>
        <Card.Text>{info.date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.setState({
      articles: ARTICLES
    });
  }

  handleSortUpvoted = (e) => {
    e.preventDefault();
    const upvotedArticles = this.state.articles.sort(
      (a, b) => b.upvotes - a.upvotes
    );
    this.setState({
      articles: upvotedArticles
    });
  };

  handleSortRecent = (e) => {
    e.preventDefault();
    const recentArticles = this.state.articles.sort((a, b) => {
      const da = new Date(a.date);
      const db = new Date(b.date);
      return db.getTime() - da.getTime();
    });
    this.setState({
      articles: recentArticles
    });
  };

  render() {
    return (
      <div className="App-Articles py-4">
        <Row>
          <Col>
            <Sort
              sortUpvoted={this.handleSortUpvoted}
              sortRecent={this.handleSortRecent}
            />
            {this.state.articles.map((item) => (
              <Article key={item.title} info={item} />
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Articles;
