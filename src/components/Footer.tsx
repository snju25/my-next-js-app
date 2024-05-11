const Footer = () => {
  return (
    <div className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            <div>
                <p className="text-white font-bold pb-2">About us</p>
                <p className="text-neutral-300">Music school is a premier instutition dedicated to teaching the art and science of music. We nurture talent from the ground up,fostering a vibrant community of musicians.</p>
            </div>
            <div>
                <p className="text-white font-bold pb-2">Quick Links</p>
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
                <p>Courses</p>
            </div>
            <div>
                <p className="text-white font-bold pb-2">Follow us</p>
                <p>facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
            <div>
                <p className="text-white font-bold pb-2">Contact us</p>
                <p>Brisbane, Australia</p>
                <p>Email: info@music.com</p>
                <p>phone:(123) 345-098</p>
            </div>
        </div>
        <p className="text-center mt-3 text-neutral-200">@2024 Music School, All rights reserved</p>
    </div>
  )
}
export default Footer