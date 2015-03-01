-- Broken backend
-- Not possible to demo due to Same-origin policy.
-- Damn.

{-# LANGUAGE OverloadedStrings #-}

import Web.Scotty

--import Data.Monoid (mconcat)
import Data.Text.Lazy (Text, pack, unpack)
import Data.List (reverse)


css = "<style type='text/css'>body {background-color: black; color: white; font-size: 30px; font-family: 'Comic Sans MS'}</style>"

--errorPage :: ActionM ()
errorPage = do
	addHeader "Access-Control-Allow-Origin" "*"
	addHeader "Access-Control-Allow-Methods" "GET, POST"
	html $ pack $ "<html><head>"++css++"</head><body>Access granted!</body></html>"

-- data Result { result :: String, numChars ::  }

-- instance ToJSON Coord where
   -- toJSON (Coord x y) = object ["x" .= x, "y" .= y]


main :: IO ()
main = scotty 3000 $ do
  get "/" $ errorPage
  post "/" $ do
    username <- param "username"
    password <- param "password"
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Methods" "GET, POST"
    if   (unpack username) == "aom" && (unpack password) == "zucchini"
    then do
    	secret <- param "secret"
    	json $ "{\"result\": \""++reverse secret++"\", \"numChars\": \""++(show.length) secret++"\"}"
    else do
    	json $ ("{\"error\": \"Invalid username or password\"}" :: String)
  