import ListGroup from 'react-bootstrap/ListGroup';
import HorizontalStack from '../horizontalStack/horizontalStack';
import Heading from '../heading/heading';

function ListItem() {
    return (
        <div>
            <Heading name="Transaction History" />
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <HorizontalStack model="model" make="make" type="SOLD" />
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <HorizontalStack model="model" make="make" type="SOLD" />
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <HorizontalStack model="model" make="make" type="PURCHASED" />


                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <HorizontalStack model="model" make="make" type="PURCHASED" />


                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default ListItem;
