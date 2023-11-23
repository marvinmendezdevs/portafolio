function SocialMedia(){
    return (
        <ul className="flex gap-3 flex-wrap justify-center">
            <li>
                <a target="_blank" className="py-1 px-3 gap-1 flex rounded bg-black text-white" href="https://github.com/marvinmendez24">
                    <i className="bi bi-github"></i>
                    GitHub
                </a>
            </li>
            <li>
                <a target="_blank" className="py-1 px-3 gap-1 flex rounded bg-linkedin text-white" href="https://www.linkedin.com/in/marvin-mendez15/">
                    <i className="bi bi-linkedin"></i>
                    Linkedin
                </a>
            </li>
            <li>
                <a target="_blank" className="py-1 px-3 gap-1 flex rounded bg-primary text-white" href="https://twitter.com/MarvinMndez15">
                    <i className="bi bi-twitter"></i>
                    Twitter
                </a>
            </li>
            <li>
                <a target="_blank" className="py-1 px-3 gap-1 flex rounded bg-youtube text-white" href="https://www.youtube.com/channel/UCjFHUyKt1WyetPCt9YupmpQ">
                    <i className="bi bi-youtube"></i>
                    YouTube
                </a>
            </li>
            <li>
                <a target="_blank" className="py-1 px-3 gap-1 flex rounded bg-primary text-white
                bg-gradient-to-r from-gray-900 to-tiktok
                " href="https://www.tiktok.com/@_marvin.mendez">
                    <i className="bi bi-tiktok"></i>
                    TikTok
                </a>
            </li>
        </ul>
    );
}

export default SocialMedia;