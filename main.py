player_1_rock_paper_scissors = 0
player_2_rock_paper_scissors = 0
image_1: Image = None
image_2: Image = None

def on_logo_pressed():
    global player_1_rock_paper_scissors, player_2_rock_paper_scissors, image_1, image_2
    while True:
        player_1_rock_paper_scissors = randint(1, 3)
        player_2_rock_paper_scissors = randint(1, 3)
        if player_1_rock_paper_scissors == 1:
            image_1 = images.icon_image(IconNames.SCISSORS)
        elif player_1_rock_paper_scissors == 2:
            image_1 = images.create_image("""
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                """)
        elif player_1_rock_paper_scissors == 3:
            image_1 = images.create_image("""
                . . . . .
                . . # . .
                . # # # .
                . # # # .
                . . . . .
                """)
        basic.show_string("P1:")
        image_1.show_image(0)
        if player_2_rock_paper_scissors == 1:
            image_2 = images.icon_image(IconNames.SCISSORS)
        elif player_2_rock_paper_scissors == 2:
            image_2 = images.create_image("""
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                """)
        elif player_2_rock_paper_scissors == 3:
            image_2 = images.create_image("""
                . . . . .
                . . # . .
                . # # # .
                . # # # .
                . . . . .
                """)
        basic.show_string("P2:")
        image_2.show_image(0)
        if player_1_rock_paper_scissors == 1 and player_1_rock_paper_scissors == 1:
            basic.show_string("It's a draw.")
            continue
        elif player_1_rock_paper_scissors == 2 and player_1_rock_paper_scissors == 2:
            basic.show_string("It's a draw.")
            continue
        elif player_1_rock_paper_scissors == 3 and player_1_rock_paper_scissors == 3:
            basic.show_string("It's a draw.")
            continue
        elif player_1_rock_paper_scissors == 1 and player_2_rock_paper_scissors == 2:
            basic.show_string("P1 won.")
            break
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)
