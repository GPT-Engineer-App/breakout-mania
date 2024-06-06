import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState("start"); // 'start', 'playing', 'gameover', 'levelup'
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);

  const paddleWidth = 100;
  const paddleHeight = 10;
  const ballRadius = 10;
  const blockRowCount = 5;
  const blockColumnCount = 8;
  const blockWidth = 75;
  const blockHeight = 20;
  const blockPadding = 10;
  const blockOffsetTop = 30;
  const blockOffsetLeft = 30;

  let paddleX;
  let ballX;
  let ballY;
  let ballDX;
  let ballDY;
  let blocks = [];

  const initGame = () => {
    paddleX = (canvasRef.current.width - paddleWidth) / 2;
    ballX = canvasRef.current.width / 2;
    ballY = canvasRef.current.height - 30;
    ballDX = 2;
    ballDY = -2;
    blocks = [];
    for (let c = 0; c < blockColumnCount; c++) {
      blocks[c] = [];
      for (let r = 0; r < blockRowCount; r++) {
        blocks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
  };

  const drawPaddle = (ctx) => {
    ctx.beginPath();
    ctx.rect(paddleX, canvasRef.current.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  };

  const drawBall = (ctx) => {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  };

  const drawBlocks = (ctx) => {
    for (let c = 0; c < blockColumnCount; c++) {
      for (let r = 0; r < blockRowCount; r++) {
        if (blocks[c][r].status === 1) {
          const blockX = c * (blockWidth + blockPadding) + blockOffsetLeft;
          const blockY = r * (blockHeight + blockPadding) + blockOffsetTop;
          blocks[c][r].x = blockX;
          blocks[c][r].y = blockY;
          ctx.beginPath();
          ctx.rect(blockX, blockY, blockWidth, blockHeight);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  };

  const collisionDetection = () => {
    for (let c = 0; c < blockColumnCount; c++) {
      for (let r = 0; r < blockRowCount; r++) {
        const b = blocks[c][r];
        if (b.status === 1) {
          if (ballX > b.x && ballX < b.x + blockWidth && ballY > b.y && ballY < b.y + blockHeight) {
            ballDY = -ballDY;
            b.status = 0;
            setScore((prevScore) => prevScore + 1);
            if (score + 1 === blockRowCount * blockColumnCount) {
              setGameState("levelup");
            }
          }
        }
      }
    }
  };

  const draw = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    drawBlocks(ctx);
    drawBall(ctx);
    drawPaddle(ctx);
    collisionDetection();

    if (ballX + ballDX > canvasRef.current.width - ballRadius || ballX + ballDX < ballRadius) {
      ballDX = -ballDX;
    }
    if (ballY + ballDY < ballRadius) {
      ballDY = -ballDY;
    } else if (ballY + ballDY > canvasRef.current.height - ballRadius) {
      if (ballX > paddleX && ballX < paddleX + paddleWidth) {
        ballDY = -ballDY;
      } else {
        if (lives > 1) {
          setLives((prevLives) => prevLives - 1);
          ballX = canvasRef.current.width / 2;
          ballY = canvasRef.current.height - 30;
          ballDX = 2;
          ballDY = -2;
          paddleX = (canvasRef.current.width - paddleWidth) / 2;
        } else {
          setLives(0);
          setGameState("gameover");
        }
      }
    }

    ballX += ballDX;
    ballY += ballDY;

    if (gameState === "playing") {
      requestAnimationFrame(draw);
    }
  };

  useEffect(() => {
    if (gameState === "playing") {
      initGame();
      draw();
    }
  }, [gameState]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      paddleX = Math.min(paddleX + 7, canvasRef.current.width - paddleWidth);
    } else if (e.key === "ArrowLeft") {
      paddleX = Math.max(paddleX - 7, 0);
    }
    draw();
  };

  useEffect(() => {
    if (gameState === "playing") {
      initGame();
      draw();
    }
  }, [gameState]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const startGame = () => {
    setGameState("playing");
    setScore(0);
    setLives(3);
    setLevel(1);
  };

  const nextLevel = () => {
    setLevel((prevLevel) => prevLevel + 1);
    setGameState("playing");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {gameState === "start" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">Breakout Game</Text>
          <Button onClick={startGame}>Start Game</Button>
        </VStack>
      )}
      {gameState === "playing" && (
        <Box>
          <Text>Score: {score}</Text>
          <Text>Lives: {lives}</Text>
          <Text>Level: {level}</Text>
          <canvas ref={canvasRef} width="640" height="480" style={{ border: "1px solid #000" }}></canvas>
        </Box>
      )}
      {gameState === "gameover" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">Game Over</Text>
          <Text>Score: {score}</Text>
          <Button onClick={startGame}>Restart Game</Button>
        </VStack>
      )}
      {gameState === "levelup" && (
        <VStack spacing={4}>
          <Text fontSize="2xl">Level Up!</Text>
          <Button onClick={nextLevel}>Next Level</Button>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
