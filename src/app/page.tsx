"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Modal,
  Box,
} from "@mui/material";

export default function Home() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  return (
    <Box>
      <Box className="flex gap-12 flex-wrap justify-center mt-16">
        <Card className="w-[275px]">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Moin!
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Ein norddeutscher Gruß, besonders in Hamburg und
              Schleswig-Holstein. &quot;Moin&quot; kann zu jeder Tageszeit verwendet
              werden - morgens, mittags und abends - sowohl formell als auch
              informell.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setOpenModal1(true)}>
              Infos
            </Button>
          </CardActions>
        </Card>

        <Card className="w-[275px]">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              G&apos;day mate!
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              An iconic Australian greeting that embodies friendliness. &quot;G&apos;day&quot;
              can be used any time of day with anyone - from your boss to your
              barista. Add &quot;mate&quot; for extra Aussie charm!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setOpenModal2(true)}>
              Infos
            </Button>
          </CardActions>
        </Card>

        <Card className="w-[275px]">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              ¿Qué onda?
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Un saludo mexicano súper informal que significa &quot;¿Qué tal?&quot; o
              &quot;¿Cómo estás?&quot;. Popular entre jóvenes y amigos. ¡Perfecto para
              romper el hielo con un toque de calidez mexicana!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setOpenModal3(true)}>
              Infos
            </Button>
          </CardActions>
        </Card>
      </Box>

      <Modal
        open={openModal1}
        onClose={() => setOpenModal1(false)}
        aria-labelledby="modal-1-title"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-xl p-4 rounded-lg">
          <Typography id="modal-1-title" variant="h6" component="h2">
            More Info 🇩🇪
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openModal2}
        onClose={() => setOpenModal2(false)}
        aria-labelledby="modal-2-title"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-xl p-4 rounded-lg">
          <Typography id="modal-2-title" variant="h6" component="h2">
            More Info 🇦🇺
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={openModal3}
        onClose={() => setOpenModal3(false)}
        aria-labelledby="modal-3-title"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-xl p-4 rounded-lg">
          <Typography id="modal-3-title" variant="h6" component="h2">
            More Info 🇲🇽
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
