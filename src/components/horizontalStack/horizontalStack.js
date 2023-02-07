import { ListGroup } from 'react-bootstrap';

function HorizontalStack(props) {
  return (
    <center>
    <ListGroup action variant="info" horizontal clasName="smy-2">
      <ListGroup.Item><img src='https://w7.pngwing.com/pngs/441/561/png-transparent-fiat-500-computer-icons-icon-design-fiat-car-fiat-500-share-icon-thumbnail.png' width='50' height='50' alt='thumbnail'/></ListGroup.Item>
      <ListGroup.Item>{props.model}</ListGroup.Item>
      <ListGroup.Item>{props.make}</ListGroup.Item>
      <ListGroup.Item>{props.type}</ListGroup.Item>
      <ListGroup.Item>Activity Date - MMM DD YYYY</ListGroup.Item>
    </ListGroup>
    </center>
  );
}

export default HorizontalStack;
