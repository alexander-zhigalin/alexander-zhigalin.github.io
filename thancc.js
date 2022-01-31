function thank_donor()
{
    let donation_amt = document.querySelector('#donation_amt').value;
    let thankspace = document.querySelector('#thankspace');
    let thankspace_big = document.querySelector('#thankspace_big');
    if (donation_amt > 0 && donation_amt < 1000000)
    {
        thankspace.innerHTML = 'Thank you for donating $' + donation_amt + '!';
    }
    else if (1000000 <= donation_amt)
    {
        thankspace.innerHTML = 'Wow, $' + donation_amt + ' is huge! Check out my favorite meme:';
        thankspace_big.innerHTML = "<img src='"+ "Walking.jpg" + "'>";
    }
    else if (donation_amt < 0)
    {
        thankspace.innerHTML = 'What, you thought you could steal $' + (-donation_amt) + ' from me, you sly thief?';
    }
    else
    {
        thankspace.innerHTML = "Ur trolling";
    }
}