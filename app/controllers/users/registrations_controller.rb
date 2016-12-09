class Users::RegistrationsController < Devise::RegistrationsController
  http_basic_authenticate_with name: ENV["USERNAME"], password: ENV["PASSWORD"]

end
