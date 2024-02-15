import { useState } from 'react'
import { sha256 } from 'js-sha256';
import JSConfetti from 'js-confetti'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Image1 from './images/1.png'
import Image2 from './images/2.png'
import Image3 from './images/3.png'

const noPrompts = ["No", 
                  "Are you sure",
                  "Are you really sure?",
                  "Think again",
                  "Last chance",
                  "If you say no I'll be sad",
                  "Okay fine I'll stop bothering :)",
                  "JUST KIDDING! please say yes",
                  "If that's what you really want :'("]

function App() {
  const [count, setCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const [nextPressed, setNextPressed] = useState(false)
  const yesButtonSize = count * 20 + 16;
  const jsConfetti = new JSConfetti()
  const [locked, setLocked] = useState(true)
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleClick() {
    setCount(count + 1)
  }

  function noButtonText() {
    return noPrompts[Math.min(count, noPrompts.length - 1)]
  }
  
  function handleNext() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  function rewardHandler() {
    jsConfetti.addConfetti({
      emojis: ['🌹', '🌸', '💮', '❤️', '❤️'],
      emojiSize: 40,
      confettiNumber: 100,
      confettiRadius: 200,
    })
  }

  function checkPassword() {
    if (sha256(password) === '4def0c3b794ad794a7948a7c52645cc364a1a5005dd75d32e9266ca02379203d') {
      setLocked(false)
      setMessage('You are now logged in')
      rewardHandler()
    } else {
      setMessage('Sorry! Not meant for your eyes 🥱')
    }
  }

  return (
    <>
      <div>
        {(yesPressed && !nextPressed) ? (
          <div className="bg-gradient-to-b from-sky-200 flex flex-col items-center justify-center h-screen">
            <img src="https://media.tenor.com/nQkh_i7bvuYAAAAi/eccomi.gif" alt="Heart Catapult" className="w-60 h-45" />
            <h1 className="font-owen text-gray-700 text-6xl font-thin text-center">Yaay!!!</h1>
            <div className="mt-20 -mb-32 animate-bounce">
              <button className="text-gray-700 text-5xl border-4 border-gray-700 hover:bg-gray-700 hover:text-sky-100 rounded-full size-16"
                      onClick={() => {
                        setNextPressed(true)
                        handleNext()
                      }}>
                <span>
                  <FontAwesomeIcon icon={faArrowDown} />
                </span>
              </button>
            </div>
            <div className="flex flex-col content-end mt-64 -mb-10">
              <div className="flex flex-row pt-8 ml-32">
                <div id="cloud"></div>
                <div id="cloud"></div>
                <div id="cloud"></div>
                <div id="cloud"></div>
              </div>
              <div className="flex flex-row -mt-8">
                <div id="cloud"></div>
                <div id="cloud"></div>
                <div id="cloud"></div>
                <div id="cloud"></div>
                <div id="cloud"></div>
              </div>
            </div>
          </div>
        ) : (yesPressed && nextPressed) ? (
          <div onLoad={handleNext} className="no-scrollbar">
            <div className="bg-gradient-to-b from-sky-200 flex flex-col items-center justify-center h-screen">
              <img src="https://media.tenor.com/nQkh_i7bvuYAAAAi/eccomi.gif" alt="Heart Catapult" className="w-60 h-45" />
              <h1 className="font-owen text-gray-700 text-6xl font-thin text-center">Yaay!!!</h1>
              <div className="mt-20 -mb-32 animate-bounce">
                <button className="text-gray-700 text-5xl border-4 border-gray-700 hover:bg-gray-700 hover:text-sky-100 rounded-full size-16"
                        onClick={() => {
                          setNextPressed(true)
                          handleNext()
                        }}>
                  <span>
                    <FontAwesomeIcon icon={faArrowDown} />
                  </span>
                </button>
              </div>
              <div className="flex flex-col content-end mt-64 -mb-10">
                <div className="flex flex-row pt-8 ml-32">
                  <div id="cloud"></div>
                  <div id="cloud"></div>
                  <div id="cloud"></div>
                  <div id="cloud"></div>
                </div>
                <div className="flex flex-row -mt-8">
                  <div id="cloud"></div>
                  <div id="cloud"></div>
                  <div id="cloud"></div>
                  <div id="cloud"></div>
                  <div id="cloud"></div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-t from-pink-200 flex flex-col items-center justify-center h-dvh">
              <div className="h-4/6 w-5/6 bg-white rounded-3xl drop-shadow-2xl">
                <div className="flex flex-row h-full w-full">
                  <div className="flex flex-col w-2/5">
                    <div className="max-h-1/2 overflow-hidden">
                      <img className="w-2/3 block ml-2 mr-2 mt-2 mb-1 rounded-2xl" src={Image1} />
                    </div>
                    <div className="w-2/3 max-h-1/2 overflow-hidden">
                      <img className="block ml-2 mr-2 mt-1 mb-2 rounded-2xl" src={Image3} />
                    </div>
                  </div>
                  <div className="w-1/5 -ml-40 pl-2">
                    <div className="overflow-hidden">
                      <img className="block mt-4 mb-4 rounded-xl" src={Image2} />
                    </div>
                  </div>
                  <div className="border-4 border-pink-200 m-4 rounded-full">
                  </div>
                  <div>
                    {locked ? (
                    <div className="font-owen text-4xl mt-32 ml-8 mr-8 flex flex-col items-center justify-center max-w-1/5">
                      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mx-24 px-4 py-2 border-2 border-pink-300 text-center rounded-xl focus:outline-none focus:border-pink-400"
        placeholder="No point trying if ain't meant for you 🤷🏽‍♂️"
      />
      <button
        onClick={checkPassword}
        className="mt-8 px-4 py-2 bg-pink-300 text-white rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-600"
      >
        👀
      </button>
      <p className="mt-2 text-center text-gray-700">{message}</p>
                    </div>
                    ) : (
                      <div className="font-owen text-4xl m-4 text-wrap max-w-1/5">
                        Hi Neha!
                        <br />
                        <br />
                        Hope you're having an amazing day 
                        <br />
                        (ofc you are 😏)! I just wanted to tell you
                        <br />
                        that I love you so much and I'm so grateful
                        <br />
                        to have you in my life; We've been through
                        <br />
                        so much together and I'm glad that you
                        <br />
                        were the person I got to share all those
                        <br />
                        experiences with; Happy Valentine's BB! 😚
                        <br />
                        <br />
                        <p className="text-right">
                        - Abhay
                        </p>
                      </div>
                    )}
                  </div> 
                </div>
              </div>
              <img src="https://media.tenor.com/c81gcJ7FsVMAAAAi/milk-and-mocha.gif" alt="I love you" className="w-36 h-24 mt-8 -mb-24" />
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-b from-sky-200 flex flex-col items-center justify-center h-screen">
            <img src="https://media.tenor.com/ZhNxfL0GmoMAAAAi/mocha-bear-hearts.gif" alt="Heart Catapult" className="w-60 h-45 mt-32" />
            <h1 className="font-owen text-gray-700 text-6xl font-thin text-center">Will you be my Valentine?</h1>
            <div>
                <button
                  className={"yes-button"}
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => {
                    setYesPressed(true)
                    rewardHandler()
                  }}
                >
                  Yes
                </button>
                <button
                  className="no-button"
                  onClick={() => {
                    handleClick()
                  }}
                >
                  {noButtonText()}
                </button>
            </div>
            <div className="flex flex-col content-end mt-48 -mb-16">
              <div className="flex flex-row pt-8 ml-32">
                <div id="cloud"></div>
                <div id="cloud"></div>
                <div id="cloud"></div>
                <div id="cloud"></div>
              </div>
              <div className="flex flex-row -mt-8">
                <div id="cloud"></div>
                <div id="cloud"></div>
                <div id="cloud"></div>
                <div id="cloud"></div>
                <div id="cloud"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
