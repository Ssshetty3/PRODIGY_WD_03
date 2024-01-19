var player = "X";
var moves=0;
var gameMode = "2ndPlayer";
function MouserOver(id) 
{
    id.style.backgroundColor = '#D7D9E1';
}

function MouserOut(id) 
{
    id.style.backgroundColor = '#DAFAED';
}

function play(id) 
{
    var celltext = document.getElementById(id);

    if (celltext.innerHTML === "") 
	{
        celltext.innerHTML = player;
        celltext.style.color = "#0000ff";
        moves++;

        if (winMove()) 
		{
            console.log("Player wins!");
        } 
		else if (moves === 9) 
		{
            document.getElementById("game_turn").innerHTML = "It's a draw!";
        } 
		else 
		{
            switchPlayer();
            if (gameMode === "Computer" && player === "O") 
			{
                computerMove();
            }
        }
    }
}

function switchPlayer() 
{
    player = player === "X" ? "O" : "X";
    document.getElementById("game_turn").innerHTML = "Player " + player;
}

function chooseOpponent(mode) 
{
    gameMode = mode;
    resetFunc();
}
function computerMove() 
{
    
    var emptyCells = document.querySelectorAll('.cell_id:empty');
    if (emptyCells.length > 0) 
	{
        var randomIndex = Math.floor(Math.random() * emptyCells.length);
        play(emptyCells[randomIndex].id);
    }
}

function winMove()
{
	var WinCombination=[
		["col1row1", "col2row1", "col3row1"],
        ["col1row2", "col2row2", "col3row2"],
        ["col1row3", "col2row3", "col3row3"],
        ["col1row1", "col1row2", "col1row3"],
        ["col2row1", "col2row2", "col2row3"],
        ["col3row1", "col3row2", "col3row3"],
        ["col1row1", "col2row2", "col3row3"],
        ["col1row3", "col2row2", "col3row1"]
	];
	for (var i = 0; i< WinCombination.length; i++) 
	{
        var [a, b, c] = WinCombination[i];
        var A = document.getElementById(a).innerHTML;
        var B = document.getElementById(b).innerHTML;
        var C = document.getElementById(c).innerHTML;

        if (A!=="" && A===B && A===C) 
		{
            if(A==="X")
			{
				document.getElementById("game_turn").innerHTML = "Player X wins";
				player = "";
			}
			else
			{
				if (gameMode === "Computer") 
				{
                    document.getElementById("game_turn").innerHTML = "Computer wins";
                } 
				else 
				{
                    document.getElementById("game_turn").innerHTML = "Player O wins";
                }
			}
			
			document.getElementById(a).style.color = '#f00';
            document.getElementById(b).style.color = '#f00';
            document.getElementById(c).style.color = '#f00';
			

			return true;
        }
    }

    return false;
}

function resetFunc() {
    player = "X";
    moves = 0;
    document.getElementById("game_turn").innerHTML = "Player X";

    var cells = document.getElementsByClassName("num");
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
        cells[i].style.color = "#0000ff";
    }
}

function resetFunc() 
{
    player = "X";
    moves = 0;
    document.getElementById("game_turn").innerHTML = "Player X";

    var cells = document.getElementsByClassName("cell_id");
    for (var i = 0; i < cells.length; i++) 
	{
        cells[i].innerHTML = "";
        cells[i].style.color = "#0000ff";
    }
}
