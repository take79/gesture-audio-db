# -*- encoding: utf-8 -*-
# stub: av 0.9.0 ruby lib

Gem::Specification.new do |s|
  s.name = "av"
  s.version = "0.9.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Omar Abdel-Wahab"]
  s.date = "2015-03-22"
  s.description = "Programmable Ruby interface for FFMPEG/Libav"
  s.email = ["owahab@gmail.com"]
  s.homepage = "https://github.com/ruby-av"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.5.1"
  s.summary = "Programmable Ruby interface for FFMPEG/Libav"

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>, ["~> 1.6"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<rspec>, ["~> 3.0.0"])
      s.add_development_dependency(%q<coveralls>, [">= 0"])
      s.add_runtime_dependency(%q<cocaine>, ["~> 0.5.3"])
    else
      s.add_dependency(%q<bundler>, ["~> 1.6"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<rspec>, ["~> 3.0.0"])
      s.add_dependency(%q<coveralls>, [">= 0"])
      s.add_dependency(%q<cocaine>, ["~> 0.5.3"])
    end
  else
    s.add_dependency(%q<bundler>, ["~> 1.6"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<rspec>, ["~> 3.0.0"])
    s.add_dependency(%q<coveralls>, [">= 0"])
    s.add_dependency(%q<cocaine>, ["~> 0.5.3"])
  end
end
