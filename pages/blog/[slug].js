export async function getStaticPaths() {
    return {
        paths: ['/blog/schedule', '/blog/music'],
        fallback: false,
    }

}

export async function getStaticProps(context) {
    console.log('posts:', context.params)
    
    return {
        props: { message: "Dynamic Routes" }
    }
}
