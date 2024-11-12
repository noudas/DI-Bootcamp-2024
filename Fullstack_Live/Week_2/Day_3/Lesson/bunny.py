import turtle

# Set up the screen
screen = turtle.Screen()
screen.bgcolor("white")

# Create the turtle
bunny = turtle.Turtle()
bunny.speed(5)

# Draw the bunny's ears
def draw_ear(x, y, size):
    bunny.penup()
    bunny.goto(x, y)
    bunny.pendown()
    bunny.setheading(60)
    bunny.circle(size, 120)

# Draw bunny head
def draw_head():
    bunny.penup()
    bunny.goto(0, -100)
    bunny.pendown()
    bunny.color("gray")
    bunny.begin_fill()
    bunny.circle(100)
    bunny.end_fill()

# Draw bunny eyes
def draw_eyes():
    # Left eye
    bunny.penup()
    bunny.goto(-35, 40)
    bunny.pendown()
    bunny.color("white")
    bunny.begin_fill()
    bunny.circle(15)
    bunny.end_fill()

    # Right eye
    bunny.penup()
    bunny.goto(35, 40)
    bunny.pendown()
    bunny.color("white")
    bunny.begin_fill()
    bunny.circle(15)
    bunny.end_fill()

    # Pupils
    bunny.penup()
    bunny.goto(-35, 45)
    bunny.pendown()
    bunny.color("black")
    bunny.begin_fill()
    bunny.circle(5)
    bunny.end_fill()

    bunny.penup()
    bunny.goto(35, 45)
    bunny.pendown()
    bunny.color("black")
    bunny.begin_fill()
    bunny.circle(5)
    bunny.end_fill()

# Draw bunny nose
def draw_nose():
    bunny.penup()
    bunny.goto(0, 20)
    bunny.pendown()
    bunny.color("pink")
    bunny.begin_fill()
    bunny.circle(10)
    bunny.end_fill()

# Draw bunny mouth
def draw_mouth():
    bunny.penup()
    bunny.goto(0, 20)
    bunny.pendown()
    bunny.setheading(-60)
    bunny.circle(10, 120)

    bunny.penup()
    bunny.goto(0, 20)
    bunny.pendown()
    bunny.setheading(-120)
    bunny.circle(10, -120)

# Draw bunny whiskers
def draw_whiskers():
    # Left whiskers
    bunny.penup()
    bunny.goto(-15, 10)
    bunny.pendown()
    bunny.setheading(180)
    bunny.forward(30)

    bunny.penup()
    bunny.goto(-15, 0)
    bunny.pendown()
    bunny.setheading(180)
    bunny.forward(30)

    bunny.penup()
    bunny.goto(-15, -10)
    bunny.pendown()
    bunny.setheading(180)
    bunny.forward(30)

    # Right whiskers
    bunny.penup()
    bunny.goto(15, 10)
    bunny.pendown()
    bunny.setheading(0)
    bunny.forward(30)

    bunny.penup()
    bunny.goto(15, 0)
    bunny.pendown()
    bunny.setheading(0)
    bunny.forward(30)

    bunny.penup()
    bunny.goto(15, -10)
    bunny.pendown()
    bunny.setheading(0)
    bunny.forward(30)

# Draw bunny body
def draw_body():
    bunny.penup()
    bunny.goto(0, -100)
    bunny.pendown()
    bunny.color("gray")
    bunny.begin_fill()
    bunny.circle(150)
    bunny.end_fill()

# Draw bunny feet
def draw_feet():
    # Left foot
    bunny.penup()
    bunny.goto(-50, -200)
    bunny.pendown()
    bunny.color("white")
    bunny.begin_fill()
    bunny.circle(30)
    bunny.end_fill()

    # Right foot
    bunny.penup()
    bunny.goto(50, -200)
    bunny.pendown()
    bunny.color("white")
    bunny.begin_fill()
    bunny.circle(30)
    bunny.end_fill()

# Draw bunny tail
def draw_tail():
    bunny.penup()
    bunny.goto(100, -100)
    bunny.pendown()
    bunny.color("white")
    bunny.begin_fill()
    bunny.circle(40)
    bunny.end_fill()

# Drawing the bunny
draw_head()
draw_ear(-60, 100, 40)
draw_ear(60, 100, 40)
draw_eyes()
draw_nose()
draw_mouth()
draw_whiskers()
draw_body()
draw_feet()
draw_tail()

# Hide the turtle and complete the drawing
bunny.hideturtle()
turtle.done()
