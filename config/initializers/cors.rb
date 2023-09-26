Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://127.0.0.1:3000' # Adjust the origin as needed

    resource '/message/random',
             headers: :any,
             methods: [:get] # Add other HTTP methods if needed
  end
end
