class LfMailer < ApplicationMailer
  default from: 'donotreply@legalfab.com'
  layout 'mailer'

  def send_cust_query(params)
    @query_details = params
    mail(:to=>"info@legalfab.com", :subject=>"New contact from Legalfab.com (Mainwebsite)")
  end

end
