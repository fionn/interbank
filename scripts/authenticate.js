function authenticate()
{
    const pw = document.getElementById("password").value;

    if(md5(pw) == "d8578edf8458ce06fbc5bb76a58c5ca4")
    {
        document.getElementById("login").action = "login.html";
        document.getElementById("login").submit();
    }
    else
    {
        document.getElementById("login").action = "badlogin.html";
        document.getElementById("login").submit();
    }
}
