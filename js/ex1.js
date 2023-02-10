<html>
<body>
  <script>
  const number = Number(prompt("Enter a number from 1-100:"));
  alert(${number});
  if ((number >= 0) && (number <= 100)) {
    console.log(`Thank you! You entered ${number}, a valid number.`);
  }
  else if ((number < 0) || (number > 100)) {
  console.log(`Sorry, ${number} is not a valid entry.`);
  }
    </script> 
</body>
</html>

