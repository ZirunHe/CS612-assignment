import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import avicii from "../../assets/avicii.jpg";
import skrillex from "../../assets/skrillex.jpg";
import martingarrix from "../../assets/martingarrix.jpg";
import "./Card.css";

const CardExampleCard = () => (
  <React.Fragment>
    <Card fluid className="dj-card">
      <Image src={avicii} />
      <Card.Content>
        <Card.Header>Avicii</Card.Header>
        <Card.Meta>
          <span className="date">8 September 1989 – 20 April 2018</span>
        </Card.Meta>
        <Card.Description>
          a Swedish music programmer, DJ, remixer and record producer.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>Read More</a>
      </Card.Content>
    </Card>

    <Card fluid className="dj-card">
      <Image src={skrillex} />
      <Card.Content>
        <Card.Header>Skrillex</Card.Header>
        <Card.Meta>
          <span className="date">8 September 1989 – 20 April 2018</span>
        </Card.Meta>
        <Card.Description>
          a Swedish music programmer, DJ, remixer and record producer.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>Read More</a>
      </Card.Content>
    </Card>

    <Card fluid className="dj-card">
      <Image src={martingarrix} />
      <Card.Content>
        <Card.Header>Martin Garrix</Card.Header>
        <Card.Meta>
          <span className="date">8 September 1989 – 20 April 2018</span>
        </Card.Meta>
        <Card.Description>
          a Swedish music programmer, DJ, remixer and record producer.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>Read More</a>
      </Card.Content>
    </Card>
  </React.Fragment>
);

export default CardExampleCard;
