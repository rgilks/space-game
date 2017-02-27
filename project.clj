(defproject space-game "0.0.1-SNAPSHOT"
  :description "A fun space game"
  :url ""

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.473"]
                 [quil "2.6.0"]]

  :plugins [[lein-cljsbuild "1.1.5"
             :exclusions [org.clojure/clojure]]
            [lein-figwheel "0.5.4-7"]]

  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/space_game.js"
                                    :target-path]

  :source-paths ["src"]

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.0-1"]]
                   :source-paths ["cljs_src"] }}

  :cljsbuild {
               :builds [{:id "space-game"
                         :source-paths ["src"]
                         :figwheel true
                         :compiler {
                                     :main space-game.core
                                     :asset-path "js/out"
                                     :output-to "resources/public/js/space_game.js"
                                     :output-dir "resources/public/js/out"
                                     :source-map-timestamp true}}]}

  :figwheel { :css-dirs ["resources/public/css"]
              :open-file-command "emacsclient"
              })

