export default function Footer(){
    return(
        <footer className="fixed bottom-0 w-full bg-background flex justify-center text-secondary-foreground border-t py-4 shadow-sm">
            &copy; Flying Book {new Date().getFullYear()}
        </footer>
    )
}