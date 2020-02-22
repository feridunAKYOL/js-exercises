/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
  Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5 % and 23.5 %.

Find the oxygen level of the first safe planet - Oxygen between 19.5 and 23.5
    */
function enoughO2(oxygen) {
	return 19.5 < oxygen && oxygen < 23.5;
}

var oxygenLevels = [ 24.2, 11.3, 19.9, 23.1, 29.3, 20.2 ];

var safeOxygenLevel = oxygenLevels.find(enoughO2); //Complete this statement

console.log(safeOxygenLevel + '%');

/*
EXPECTED OUTPUT
19.9%
*/
