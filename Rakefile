desc "compile and run the site"
task :default do
  pids = [
    spawn("jekyll serve -w"), # put `auto: true` in your _config.yml
    spawn("scss --watch assets:css"),
    spawn("coffee -b -w -o assets/js -c assets/coffee/*.coffee")
  ]
 
  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end
 
  loop do
    sleep 1
  end
end

desc 'Build site and start server with --auto'
task :run do
  jekyll 'serve watch'
end

def jekyll(opts = '')
  sh 'rm -rf _site'
  sh 'jekyll ' + opts
end