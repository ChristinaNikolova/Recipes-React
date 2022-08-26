import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-content">
                <a href="https://github.com/ChristinaNikolova/Recipes---React" target="_blank">Recipes&copy;</a> - {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;