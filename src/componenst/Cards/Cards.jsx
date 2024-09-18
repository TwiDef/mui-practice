import React from 'react';
import { Container, Stack } from "@mui/material";
import Card from '../Card/Card';

const Cards = () => {
  const items = [
    {
      id: 1,
      name: "Haven",
      url: "http://heroesofmightandmagic.com/heroes5/images/haven_town.jpg"
    },
    {
      id: 2,
      name: "Inferno",
      url: "http://heroesofmightandmagic.com/heroes5/images/inferno_town_small.jpg"
    },
    {
      id: 3,
      name: "Necropolis",
      url: "http://heroesofmightandmagic.com/heroes5/images/necrotown_1.jpg"
    },
    {
      id: 4,
      name: "Dungeon",
      url: "http://heroesofmightandmagic.com/heroes5/451/dungeon_town_screen.jpg"
    },
    {
      id: 5,
      name: "Academy",
      url: "http://heroesofmightandmagic.com/heroes5/images/academy_town.jpg"
    },
    {
      id: 6,
      name: "Sylvan",
      url: "http://heroesofmightandmagic.com/heroes5/451/sylvan_town_screen.jpg"
    },
  ]

  return (
    <Container maxWidth="md">
      <Stack
        sx={{ pt: 10, pb: 10 }}
        direction="row"
        justifyContent="center"
        gap={6}
        flexWrap="wrap">
        {items && items.map(item => {
          return (
            <Card key={item.id} item={item} />
          )
        })}
      </Stack>
    </Container>
  );
};

export default Cards;