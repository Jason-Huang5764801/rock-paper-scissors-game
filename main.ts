let player_1_rock_paper_scissors = 0
let player_2_rock_paper_scissors = 0
let image_1: Image = null
let image_2: Image = null
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (true) {
        player_1_rock_paper_scissors = randint(1, 3)
        player_2_rock_paper_scissors = randint(1, 3)
        if (player_1_rock_paper_scissors == 1) {
            image_1 = images.iconImage(IconNames.Scissors)
        } else if (player_1_rock_paper_scissors == 2) {
            image_1 = images.createImage(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (player_1_rock_paper_scissors == 3) {
            image_1 = images.createImage(`
                . . . . .
                . . # . .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        basic.showString("P1:")
        image_1.showImage(0)
        basic.clearScreen()
        if (player_2_rock_paper_scissors == 1) {
            image_2 = images.iconImage(IconNames.Scissors)
        } else if (player_2_rock_paper_scissors == 2) {
            image_2 = images.createImage(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (player_2_rock_paper_scissors == 3) {
            image_2 = images.createImage(`
                . . . . .
                . . # . .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        basic.showString("P2:")
        image_2.showImage(0)
        basic.clearScreen()
        if (player_1_rock_paper_scissors == player_2_rock_paper_scissors) {
            basic.showString("It's a draw.")
            continue;
        } else if (player_1_rock_paper_scissors != player_2_rock_paper_scissors) {
            if (player_1_rock_paper_scissors == 1 && player_2_rock_paper_scissors == 2) {
                basic.showString("P1 won.")
            } else if (player_1_rock_paper_scissors == 1 && player_2_rock_paper_scissors == 3) {
                basic.showString("P2 won.")
            } else if (player_1_rock_paper_scissors == 2 && player_2_rock_paper_scissors == 1) {
                basic.showString("P2 won.")
            } else if (player_1_rock_paper_scissors == 2 && player_2_rock_paper_scissors == 3) {
                basic.showString("P1 won.")
            } else if (player_1_rock_paper_scissors == 3 && player_2_rock_paper_scissors == 1) {
                basic.showString("P1 won.")
            } else if (player_1_rock_paper_scissors == 3 && player_2_rock_paper_scissors == 2) {
                basic.showString("P2 won.")
            }
            break;
        }
    }
})
