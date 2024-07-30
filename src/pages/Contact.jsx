import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <h1 className="text-center text-3xl mb-8">Do you need to contact us?</h1>
      <div>
        <h2 className="text-center text-2xl mb-4">
          you can do this as follows :
        </h2>
        <div className="flex justify-center items-center gap-4 mb-10">
          <a href="https://wa.me/" target="blanck">
            <FaWhatsapp className="w-7 h-7 hover:text-violet-600" />
          </a>
          <a href="https://t.me/Ziyodillokhon_V" target="blanck">
            <FaTelegram className="w-7 h-7 hover:text-violet-600" />
          </a>
          <a href="https://www.instagram.com/Zikko_595/" target="blanck">
            <FaInstagram className="w-7 h-7 hover:text-violet-600" />
          </a>
          <a href="https://discord.com/" target="blanck">
            <FaDiscord className="w-7 h-7 hover:text-violet-600" />
          </a>
        </div>
        <p className="text-center text-2xl mb-4">or</p>
        <div className="flex items-center justify-center">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            write to the admin
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="admin ava"
                      src="https://sneg.top/uploads/posts/2023-06/1687758418_sneg-top-p-tekhnika-ava-vkontakte-31.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  Kolen
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">
                  If there are problems with the site, then solve it yourself.
                  I'm going to lunch!
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  Anakin
                  <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">WTF!? I hate you!</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default Contact;
