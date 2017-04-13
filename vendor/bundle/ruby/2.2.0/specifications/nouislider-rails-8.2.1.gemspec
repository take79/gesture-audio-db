# -*- encoding: utf-8 -*-
# stub: nouislider-rails 8.2.1 ruby lib

Gem::Specification.new do |s|
  s.name = "nouislider-rails"
  s.version = "8.2.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Charles Lee"]
  s.date = "2016-01-16"
  s.description = "Currently tracking 8.2.1 of noUiSlider: https://github.com/leongersen/noUiSlider). All credit and thanks to @leongersen for the awesome library."
  s.email = ["chug2k@gmail.com"]
  s.homepage = "https://github.com/chug2k/nouislider-rails"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.4.5.1"
  s.summary = "nouislider.js for the Rails asset pipeline."

  s.installed_by_version = "2.4.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>, [">= 3.1"])
      s.add_development_dependency(%q<bundler>, ["~> 1.5"])
      s.add_development_dependency(%q<rake>, [">= 0"])
    else
      s.add_dependency(%q<railties>, [">= 3.1"])
      s.add_dependency(%q<bundler>, ["~> 1.5"])
      s.add_dependency(%q<rake>, [">= 0"])
    end
  else
    s.add_dependency(%q<railties>, [">= 3.1"])
    s.add_dependency(%q<bundler>, ["~> 1.5"])
    s.add_dependency(%q<rake>, [">= 0"])
  end
end
