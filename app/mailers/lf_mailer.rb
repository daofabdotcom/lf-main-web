class LfMailer < ApplicationMailer
  default from: 'donotreply@legalfab.com'
  layout 'mailer'

  def send_cust_query(params)
    @query_details = params
    mail(:to=>"agrawal.anu90@gmail.com", :subject=>"New contact from Legalfab.com (Mainwebsite)")
  end

end
