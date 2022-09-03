let navbar = ()=>{

    return `<nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
    </label>
    <label class="logo">Portfolio</label>
    <ul>
        <li><a class="active" href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="project.html">Projects</a></li>
        <li><a href="skills.html">Skills</a></li>
        <li><a href="contact.html">Contact Us</a></li>
    </ul>
</nav>
`
}
export{navbar}
  