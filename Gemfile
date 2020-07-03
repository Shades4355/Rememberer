# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.1"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem "rails", "~> 6.0.3", "~> 6.0.3.1"
# Use postgresql as the database for Active Record
gem "pg", ">= 0.18", "< 2.0"
# Use Puma as the app server
gem "puma", "~> 3.11"
# Use SCSS for stylesheets
gem "sass-rails", "~> 5.0"
# Use Uglifier as compressor for JavaScript assets
gem "uglifier", ">= 1.3.0"
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder", "~> 2.5"
# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'

# Use ActiveModel has_secur6e_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "bundler", "~> 2.1.4"
gem "devise"
gem "foundation-rails", "~> 6.5"
gem "jquery-rails"
gem "rubocop", "~> 0.86.0", require: false
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]
gem "webpacker", "~> 3.3"

group :development, :test do
  gem "capybara"
  gem "database_cleaner"
  gem "dotenv-rails"
  gem "factory_bot"
  gem "launchy"
  gem "pry-rails"
  gem "rspec-rails", "3.8.2"
  gem "shoulda-matchers", require: false
  gem "valid_attribute"
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "web-console", ">= 3.3.0"
end
