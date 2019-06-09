FROM rabbitmq:3.7-management
RUN rabbitmq-plugins enable --offline rabbitmq_mqtt rabbitmq_web_mqtt
COPY rabbitmq.conf /etc/rabbitmq/rabbitmq.conf
# rabbitmq_federation_management rabbitmq_stomp
#comment