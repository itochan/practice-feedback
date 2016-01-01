class Practice < ApplicationRecord
  before_create :generate_access_hash

  mount_uploader :file, PracticeUploader

  private
  def generate_access_hash
    self.access_hash = SecureRandom.hex
  end
end
