import { useState } from "react";
import {
  Container,
  SimpleGrid,
  List,
  ThemeIcon,
  Input,
  Drawer,
  Group,
  Button,
  Indicator,
  Badge,
} from "@mantine/core";
import { IconCircleCheck, IconShoppingCart } from "@tabler/icons";
import Card from "./components/Card";
import "./App.css";

const storeItems = [
  {
    id: 100,
    name: "Bottle",
    src: "bottle",
    price: 150,
  },
  {
    id: 101,
    name: "Camera",
    src: "camera",
    price: 200,
  },
  {
    id: 102,
    name: "Flower",
    src: "flower",
    price: 250,
  },
  {
    id: 103,
    name: "Headphone",
    src: "headphone",
    price: 250,
  },
  {
    id: 104,
    name: "Glasses",
    src: "glasses",
    price: 250,
  },
  {
    id: 105,
    name: "Watch",
    src: "watch",
    price: 250,
  },
];

function App() {
  let [opened, setOpened] = useState(false);
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );

  let addToBasket = ({ id, name }) => {
    let basketIndex = basketItems.findIndex((item) => item.id === id);
    if (basketIndex >= 0) {
      let _basketItems = [...basketItems];
      _basketItems[basketIndex].count += 1;
      setBasketItems(_basketItems);
    } else {
      setBasketItems([...basketItems, { id, name, count: 1 }]);
    }
  };
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Search">
          <Input onChange={(e) => setSearchValue(e.target.value)} />
        </Input.Wrapper>
        <Button onClick={() => setSearchValue("")}>Clean</Button>
        <Indicator color="red" label={basketItems.length} size={22}>
          <Button onClick={() => setOpened(true)}>
            <IconShoppingCart size={20} />{" "}
          </Button>
        </Indicator>
      </Group>
      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ id, name, src }) => {
          return (
            <Card
              key={name}
              name={name}
              src={src}
              onAdd={() => addToBasket({ id, name })}
            />
          );
        })}
      </SimpleGrid>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="My Basket"
        padding="xl"
        size="xl"
      >
        <List
          className="list"
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size={16} />
            </ThemeIcon>
          }
        >
          {basketItems.map(({ name, count }, index) => (
            <List.Item key={index}>
              {name} <Badge> {count}</Badge>
            </List.Item>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
